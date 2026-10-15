import fs from 'fs';
import { parse } from 'csv-parse/sync';
import XLSX from 'xlsx';

export class DataProvider {
    static readJson(filePath: string) {
        // Read the JSON file
        const fileContent = fs.readFileSync(filePath, 'utf8');
        // Parse the file contents
        return JSON.parse(fileContent);
    }

    static readCsv(filePath: string) {
        // Read the CSV file
        const fileContent = fs.readFileSync(filePath);
        // Parse the CSV with specified options
        return parse(fileContent, {
            columns: true,
            skip_empty_lines: true
        });
    }

    static readExcel(filePath: string) {
        // Read the Excel workbook
        const workbook = XLSX.readFile(filePath);
        // Select the first worksheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        // Convert the worksheet to JSON data
        return XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    }
}