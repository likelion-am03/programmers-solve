function solution(order) {
  return ((order + "").match(/['3'|'6'|'9']/g) || []).length;
}
