import React from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const PaginationComponent = (props) => {
  const pageLinks = [];

  let firstPage;
  if (props.currentPage <= 3) {
    firstPage = 1;
  } else {
    firstPage = props.currentPage - 2;
  }

  // Вычисляем номер последней страницы, которая будет отображаться на пагинации
  let lastPage = firstPage + 4;
  if (lastPage > props.pages) {
    lastPage = props.pages;
  }

  // Создаем элементы только для страниц от первой до последней
  for (let i = firstPage; i <= lastPage; i++) {
    let active = props.currentPage == i ? 'active' : '';

    pageLinks.push(
      <li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}>
        <a href="#">{i}</a>
      </li>
    );
  }

  return (
    <div className="site-content-pagination">
      <div className="row">
        <ul className="pagination">
          {props.currentPage > 1 ? (
            <li className={'waves-effect'} onClick={() => props.nextPage(props.currentPage - 1)}>
              <a href="#">
                <LeftOutlined />
              </a>
            </li>
          ) : (
            ''
          )}
          {pageLinks}
          {props.currentPage < props.pages ? (
            <li className={'waves-effect'} onClick={() => props.nextPage(props.currentPage + 1)}>
              <a href="#">
                <RightOutlined />
              </a>
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
    </div>
  );
};

export default PaginationComponent;
