
chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
	 details.requestHeaders.push({name: "X-Forwarded-For", value: "220.181.111.81"});
	 details.requestHeaders.push({name: "Client-IP", value: "220.181.111.81"});
    return {requestHeaders: details.requestHeaders};
  },
  {urls: ["*://www.bilibili.com/video/*","*://interface.bilibili.com/playurl*"]},
  ["blocking", "requestHeaders"]);

  