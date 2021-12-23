// TODO: background script
chrome.runtime.onInstalled.addListener((reason) => {
  
});

chrome.action.onClicked.addListener(function (tab) {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { message: "toggle_content_script" });
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg, sender, sendResponse )
  if (msg.message === "open_amazon_fresh") {
    chrome.tabs.create({
      url: "https://www.amazon.com/alm/storefront?almBrandId=QW1hem9uIEZyZXNo&ref=nav_deals"
    })
  }
})

