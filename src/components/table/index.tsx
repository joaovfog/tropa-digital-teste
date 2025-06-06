import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import editIcon from "../../assets/edit-icon.png";
import searchIcon from "../../assets/search-icon.png";
import trashIcon from "../../assets/trash-icon.png";
import viewIcon from "../../assets/view-icon.png";
import * as S from "./styles";

interface Column {
  header: string;
  key: string;
}

interface TableProps<T> {
  columns: Column[];
  data: T[];
  searchPlaceholder?: string;
  insertButtonText?: string;
  onInsert?: () => void;
  renderCustomCell?: (column: string, value: unknown) => ReactNode;
  onView?: (item: T) => void;
  onEdit?: (item: T) => void;
  onRemove?: (item: T) => void;
  itemsPerPage?: number;
}

export default function Table<
  T extends { id: number; [key: string]: unknown }
>({
  columns,
  data,
  searchPlaceholder = "Buscar",
  insertButtonText = "Inserir novo",
  onInsert,
  renderCustomCell,
  onView,
  onEdit,
  onRemove,
  itemsPerPage = 5,
}: TableProps<T>) {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOptionsClick = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleOptionSelect = (action: "view" | "edit" | "remove", item: T) => {
    setOpenMenuId(null);
    switch (action) {
      case "view":
        onView?.(item);
        break;
      case "edit":
        onEdit?.(item);
        break;
      case "remove":
        onRemove?.(item);
        break;
    }
  };

  const handleClickOutside = () => {
    if (openMenuId !== null) {
      setOpenMenuId(null);
    }
  };

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;

    return data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <S.PageNumber
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </S.PageNumber>
      );
    }

    return pages;
  };

  return (
    <S.TableContainer onClick={handleClickOutside}>
      <S.Actions>
        <S.SearchWrapper>
          <img src={searchIcon} alt="Search Icon" />
          <S.Search
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </S.SearchWrapper>
        {onInsert && (
          <S.InsertButton onClick={onInsert}>
            <span className="plus-icon">+</span>
            <span>{insertButtonText}</span>
          </S.InsertButton>
        )}
      </S.Actions>

      <S.Table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.header}</th>
            ))}
            {(onView || onEdit || onRemove) && <th></th>}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={column.key}>
                  {renderCustomCell
                    ? renderCustomCell(column.key, item[column.key])
                    : String(item[column.key])}
                </td>
              ))}
              {(onView || onEdit || onRemove) && (
                <td>
                  <S.Options onClick={() => handleOptionsClick(item.id)}>
                    ⋮
                    <S.OptionsMenu isOpen={openMenuId === item.id}>
                      {onView && (
                        <S.OptionItem
                          onClick={() => handleOptionSelect("view", item)}
                        >
                          <img src={viewIcon} alt="View Icon" />
                          Visualizar
                        </S.OptionItem>
                      )}
                      {onEdit && (
                        <S.OptionItem
                          onClick={() => handleOptionSelect("edit", item)}
                        >
                          <img src={editIcon} alt="Edit Icon" />
                          Editar
                        </S.OptionItem>
                      )}
                      {onRemove && (
                        <S.OptionItem
                          isRemove
                          onClick={() => handleOptionSelect("remove", item)}
                        >
                          <img src={trashIcon} alt="Remove Icon" />
                          Remover
                        </S.OptionItem>
                      )}
                    </S.OptionsMenu>
                  </S.Options>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </S.Table>

      {totalPages > 1 && (
        <S.Pagination>
          <S.PageButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            data-mobile="←"
          >
            Anterior
          </S.PageButton>
          {renderPageNumbers()}
          <S.PageButton
            isNext
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            data-mobile="→"
          >
            Próxima
          </S.PageButton>
        </S.Pagination>
      )}
    </S.TableContainer>
  );
}
