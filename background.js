chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (info.status === "complete") {
    // ピクシブのブックマークページでない場合は何もしない
    const pattern = /^https:\/\/www\.pixiv\.net\/users\/.*\/bookmarks\/.*$/;
    const isNotPixivBookmarks = tab.url.match(pattern) === null;
    if (isNotPixivBookmarks) return;

    // content-script.jsにメッセージを送信
    // 処理の分岐はしないので、messageの値は空にしている
    chrome.tabs.sendMessage(tabId, { message: "" });
  }
});
