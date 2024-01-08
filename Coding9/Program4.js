const str = 'Hi there 123!';
const charCountMap = new Map();

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
}

console.log(Object.fromEntries(charCountMap));
