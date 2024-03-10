function addLinksToHiddenElements() {
  const hiddenElement = document.querySelectorAll(
    "span.sc-rp5asc-16.iUsZyY.sc-kTCsyW.bpoGz"
  );
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
  // メッセージ受信タイミングがページ読み込み完了より早いため、少し遅延させる
  setTimeout(() => {
    addLinksToHiddenElements();
  }, 500);
});
