module.exports = {
  '*.{js,ts,tsx,jsx}': [
    'prettier --write', 
    'eslint . --fix', 
    'git add'
  ]
};
