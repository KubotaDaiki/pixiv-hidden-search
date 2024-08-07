/**
 * ページ内の非表示イラストに作品ID検索用リンクを追加する
 */
function addLinksToHiddenElements() {
  const hiddenElement = document.querySelectorAll('[data-gtm-user-id="0"]');
  [...hiddenElement].forEach(function (el) {
    const id = el.getAttribute("data-gtm-value");
    const hoverActionAttribute =
      "onMouseOver='this.style.opacity=0.6' onMouseOut='this.style.opacity=1.0'";
    el.outerHTML =
      `<a href="https://www.google.com/search?q=pixiv+&quot;${id}&quot;" ${hoverActionAttribute}>` +
      el.outerHTML +
      "</a>";
  });
}

chrome.runtime.onMessage.addListener(function () {
  // ブックマーク内でページを移動させた際、すぐに処理を実行すると前のページの要素が取得されてしまう
  // そのため遅延させる（setTimeoutより良い方法があるかも）
  setTimeout(() => {
    addLinksToHiddenElements();
  }, 500);
});
