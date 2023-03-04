export function FormatTweet(tweet: string) {
  const arr = tweet.split(" ");
  const link = arr.pop();
  const text = arr.join(" ");
  
  function getText() {
    return text;
  }

  function getLink() {
    return link;
  }
  return {getText}
}

export function FormatDate(date: Date) {
  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
}