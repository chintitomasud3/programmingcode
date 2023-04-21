function parseCSV(csv) {
  const rows = csv.trim().split('\n');
  const headers = rows.shift().split(',');
  const data = rows.map(row => {
    const values = row.split(',');
    return headers.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
  });
  return data;
}

const csv = `Name,Email,Phone
John Doe,john.doe@example.com,555-1234
Jane Smith,jane.smith@example.com,555-5678`;

const data = parseCSV(csv);
console.log(data);
