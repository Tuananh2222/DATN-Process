export default function () {

  const formatNumber = (number) => {
    return number ? new Intl.NumberFormat().format(Number(number)) : 0;
  };

  const formatDate = (dateIn) => {
    if (!dateIn)
      return ""

    const date = new Date(dateIn)

    return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 9 ? `${0}${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`
  }

  const getListPageNumber = (totalPage, currentPage) => {
    let pageRender = [];

    if (totalPage > 4) {
      if (currentPage < 3)
        pageRender = [1, 2, 3, null, totalPage]
      else if (currentPage > totalPage - 3)
        pageRender = [1, null, totalPage - 2, totalPage - 1, totalPage]
      else
        pageRender = [1, null, currentPage, currentPage + 1, currentPage + 2, null, totalPage]
    } else {
      for (let i = 1; i <= totalPage; i++)
        pageRender.push(i)
    }

    return pageRender
  }


  /**
   * Random màu
   * @returns
   */
  const randomColor = () => {
    const colors = [
      "red",
      "green",
      "yellow",
      "blue",
      "teal",
      "coral",
      "brown",
      "tomato",
    ];
    const colorIndex = Math.floor(Math.random() * 8);

    return colors[colorIndex];
  };





  const scrollTo = (top, behavior) => {
    if (process.client) {
      window.scrollTo({ top: top || 0, behavior });
    }
  };

  return {
    formatNumber,
    scrollTo,
    randomColor,
    formatDate,
    getListPageNumber
  };
}
