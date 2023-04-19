import { MatPaginatorIntl } from '@angular/material/paginator';

const dutchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 de ${length}`; }
  
  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} de ${length}`;
}


export function CustomMatPaginatorIntl() {
  const pag = new MatPaginatorIntl();
  
  pag.itemsPerPageLabel = 'Productos por página:';
  pag.nextPageLabel = 'Página siguiente';
  pag.previousPageLabel = 'Página anterior';
  pag.firstPageLabel = 'Primera página' ;
  pag.lastPageLabel = 'Última página';
  pag.getRangeLabel = dutchRangeLabel;
  
  return pag;
}