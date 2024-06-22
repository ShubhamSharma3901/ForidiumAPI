import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

// for using .env files
dotenv.config();

const app = express();
const port = 8080;

// Configure CORS options if needed
const corsOptions = {
	origin: "http://example.com", //Allowed origin
	optionsSuccessStatus: 200,
	methods: ["GET", "POST"],
};

app.use(cors(corsOptions)); // Enable CORS with the specified options
app.use(bodyParser.json());

// Function to return URLs
const getReportURL = (reportType, params) => {
	const reportURLs = {
		"Expense Report": "https://example.com/expense-report.pdf",
		"Revenue Report": "https://example.com/revenue-report.pdf",
		"Profit and Loss Report": "https://example.com/profit-loss-report.pdf",
	};
	return reportURLs[reportType] || "https://example.com/default-report.pdf";
};

// Profit and Loss Report
// Balance Sheet
// Cash Flow Report

// Endpoint to get report URL
const requestURL = [
	{
		name: "P&L_REPORT",
		data: {
			"2023-24": {
				Quaterly: {
					Q1: {
						pdf: "https://www.example.com/Q1-2023/pdf",
						excel: "https://www.example.com/Q1-2023/excel",
						csv: "https://www.example.com/Q1-2023/csv",
					},
					Q2: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q3: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q4: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
				},
				Annual: {
					pdf: "https://www.example.com/pdf",
					excel: "https://www.example.com/excel",
					csv: "",
				},
			},
			"2022-23": {
				Quaterly: {
					Q1: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q2: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q3: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q4: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
				},
				Annual: {
					pdf: "",
					excel: "",
					csv: "",
				},
			},
			"2021-22": {
				Quaterly: {
					Q1: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q2: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q3: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q4: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
				},
				Annual: {
					pdf: "https://www.example.com/pdf",
					excel: "https://www.example.com/excel",
					csv: "https://www.example.com/csv",
				},
			},
		},
	},
	{
		name: "CASH_FLOW_REPORT",
		data: {
			"2023-24": {
				Quaterly: {
					Q1: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q2: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q3: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q4: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
				},
				Annual: {
					pdf: "https://www.example.com/pdf",
					excel: "https://www.example.com/excel",
					csv: "https://www.example.com/csv",
				},
			},
			"2022-23": {
				Quaterly: {
					Q1: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q2: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q3: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q4: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
				},
				Annual: {
					pdf: "https://www.example.com/pdf",
					excel: "https://www.example.com/excel",
					csv: "https://www.example.com/csv",
				},
			},
			"2021-22": {
				Quaterly: {
					Q1: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q2: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q3: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
					Q4: {
						pdf: "https://www.example.com/pdf",
						excel: "https://www.example.com/excel",
						csv: "https://www.example.com/csv",
					},
				},
				Annual: {
					pdf: "https://www.example.com/pdf",
					excel: "https://www.example.com/excel",
					csv: "https://www.example.com/csv",
				},
			},
		},
	},
];

const findReportURL = (reportType, year, period, format) => {
	const report = requestURL.find((r) => r.name === reportType);
	if (!report) {
		return null;
	}
	const data = report.data[year];
	if (!data) {
		return null;
	}
	if (period === "Annual") {
		const periodData = data[period];
		if (!periodData) {
			return null;
		}
		return periodData[format] || null;
	} else {
		const periodData = data.Quaterly[period];
		return periodData[format] || null;
	}
};

// Endpoint to get report URL
app.post("/get-report-url", (req, res) => {
	const { reportType, year, period, format } = req.body;

	if (!reportType || !year || !period || !format) {
		return res.status(400).json({ error: "Missing required parameters" });
	}

	const reportURL = findReportURL(reportType, year, period, format);

	if (reportURL) {
		return res.json({ reportType, year, period, format, reportURL });
	} else {
		return res.status(404).json({ error: "Report not found" });
	}
});

app.get("/get-all-reports", (req, res) => {
	const allReports = requestURL.map((report) => {
		const reportData = {};
		Object.keys(report.data).forEach((year) => {
			reportData[year] = {};
			Object.keys(report.data[year].Quaterly).forEach((period) => {
				reportData[year][period] = {};
				Object.keys(report.data[year].Quaterly[period]).forEach((format) => {
					const url = findReportURL(report.name, year, period, format);
					if (url) {
						reportData[year][period][format] = url;
					}
				});
			});
			// Add Annual report URLs
			reportData[year].Annual = {};
			Object.keys(report.data[year].Annual).forEach((format) => {
				const url = findReportURL(report.name, year, "Annual", format);
				if (url) {
					reportData[year].Annual[format] = url;
				}
			});
		});
		return {
			name: report.name,
			data: reportData,
		};
	});
	res.json(allReports);
});
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
