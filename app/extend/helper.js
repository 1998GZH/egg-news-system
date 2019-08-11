module.exports = {
  // ejs文件中可以直接使用helper.方法名()
  formatDate (time) {
    return time.slice(0, 4) + '-' + time.slice(4, 6) + '-' + time.slice(6, 8);
  }
}