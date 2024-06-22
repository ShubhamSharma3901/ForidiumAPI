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
	origin: "http://example.com", // Allowed origin
	optionsSuccessStatus: 200,
	methods: ["GET", "POST"],
};

app.use(cors(corsOptions)); // Enable CORS with the specified options
app.use(bodyParser.json());

// Example report URLs
const requestURL = [
	{
		name: "P&L_REPORT",
		data: {
			"2023-24": {
				Quaterly: {
					Q1: {
						pdf: "https://drive.google.com/file/d/11L112kZnXMjquaI8gWO3Ah2UJgLcyuFW/view?usp=drive_link",
						excel:
							"https://docs.google.com/spreadsheets/d/1VxoazewAgv1Hr4l1D1QK7T0HZtLvGkOS/edit?usp=drive_link&ouid=103517831231294786486&rtpof=true&sd=true",
						csv: "https://drive.google.com/file/d/1qXkW68gneo0bDLa-hke3ne0OCfGAreHa/view?usp=drive_link",
					},
					Q2: {
						pdf: "https://drive.google.com/file/d/114uEsK90-BRONpFsKqGB4Q_8UJvf9lIv/view?usp=drive_link",
						excel:
							"https://docs.google.com/spreadsheets/d/19DlBidL43vGv9N1bUb27QALfxYPsiNe_/edit?usp=drive_link&ouid=103517831231294786486&rtpof=true&sd=true",
						csv: "https://drive.google.com/file/d/1R5x-d4tO_-YKmHBAoiIHkrW08FV3On-C/view?usp=drive_link",
					},
					Q3: {
						pdf: "https://drive.google.com/file/d/1lHtlx-XIPluI1Bpurx9wYg-Wi66VUBb9/view?usp=drive_link",
						excel:
							"https://docs.google.com/spreadsheets/d/1z2injaznLJklqEXK2PrSjjTO_rH9cN9Y/edit?usp=drive_link&ouid=103517831231294786486&rtpof=true&sd=true",
						csv: "https://drive.google.com/file/d/1hpbldR7tT0z-yxAG3r-1q2Hk7sOrQpsO/view?usp=drive_link",
					},
					Q4: {
						pdf: "https://drive.google.com/file/d/1WwHDdUKHAuP9Pqi0MqIKwhRdR_5D6Itl/view?usp=drive_link",
						excel:
							"https://docs.google.com/spreadsheets/d/1UZAMa1PWzxNVBo3Sh_aQ1LsR2ehiDY8z/edit?usp=drive_link&ouid=103517831231294786486&rtpof=true&sd=true",
						csv: "https://drive.google.com/file/d/1qEw8fkPFsV4uaL7vMQwZ3M7UCP5w_wMj/view?usp=drive_link",
					},
				},
				Annual: {
					pdf: "https://drive.google.com/file/d/1LBMChIEEqgoex1V_T9mjBH20H8w1frnU/view?usp=drive_link",
					excel:
						"https://docs.google.com/spreadsheets/d/1TlwoqttyfRE6VZn8aD9JUPsnJfeEVQ-E/edit?usp=drive_link&ouid=103517831231294786486&rtpof=true&sd=true",
					csv: "https://drive.google.com/file/d/1LWzcLzJ_LWnpoqMOgRnx9uW9YVpGu9Ws/view?usp=drive_link",
				},
			},
			"2022-23": {
				Quaterly: {
					Q1: {
						pdf: "https://drive.google.com/file/d/1fUVzKuOFWo-6RulG-o1JHxgd4G50Xxib/view?usp=drive_link",
						excel:
							"https://docs.google.com/spreadsheets/d/1Jdqdxfb_Rd5_s5ZhoT0zZZB4KJBqWpYV/edit?usp=drive_link&ouid=103517831231294786486&rtpof=true&sd=true",
						csv: "https://drive.google.com/file/d/16Vq9aRPfPD4NfrZM5iPfY3E2sCh9p22k/view?usp=drive_link",
					},
				},
				Annual: {
					pdf: "https://drive.google.com/file/d/1Ck5es-AJVKFarAMqg-RKQ13tv7blHs-L/view?usp=drive_link",
					excel:
						"https://docs.google.com/spreadsheets/d/1eS_nO4JPIVBsOG_PQBZsYUBIFzBpfORE/edit?usp=drive_link&ouid=103517831231294786486&rtpof=true&sd=true",
					csv: "https://drive.google.com/file/d/1CVuqYwsBSjhw6BhrfMkBIj-kGkkOiULg/view?usp=drive_link",
				},
			},

			"2021-22": {
				Annual: {
					pdf: "https://drive.google.com/file/d/1z9lx_2i1nejfXvWShIw9RQLESJ7j1I55/view?usp=drive_link",
					excel:
						"https://docs.google.com/spreadsheets/d/1Y2VfWoE6wivHHlmQAONNLdZGPWxJ7dgj/edit?usp=drive_link&ouid=103517831231294786486&rtpof=true&sd=true",
					csv: "https://drive.google.com/file/d/1JkPa9Z545LD42oXAlR_N5iIrXpQ3Owx-/view?usp=drive_link",
				},
			},

			"2020-21": {
				Annual: {
					pdf: "https://drive.google.com/file/d/1-FJNbpMorqioLcOUt6XIasJcUEMQud4Z/view?usp=drive_link",
					excel:
						"https://docs.google.com/spreadsheets/d/1mAe-R7TiD5fBnr8MYWVjlWw6i7P0vJlI/edit?usp=drive_link&ouid=103517831231294786486&rtpof=true&sd=true",
					csv: "https://drive.google.com/file/d/1n1KL8PJ5IHO2ozOj5g1ihmbqz2tyekoP/view?usp=drive_link",
				},
			},
		},
	},
	{
		name: "CASH_FLOW_REPORT",
		data: {
			"2023-24": {
				// Missing Quaterly key
				Annual: {
					pdf: "https://drive.google.com/file/d/1e2bU6lnzYgvBYBO8ReW55vU-LaA2cJ5D/view?usp=drive_link",
					excel:
						"https://docs.google.com/spreadsheets/d/1OajkH1CtpUYkE5qq6zW0Ry5xkCRk72UM/edit?usp=drive_link&ouid=109768404338383806081&rtpof=true&sd=true",
					csv: "https://drive.google.com/file/d/18L5qQ-ahNTctCn7c6Lax80DcMCoauCSs/view?usp=drive_link",
				},
			},
			"2022-23": {
				Annual: {
					pdf: "https://drive.google.com/file/d/1VRid8dMEn4tMKzatyhHX4yF7aksNK9rp/view?usp=drive_link",
					excel:
						"https://docs.google.com/spreadsheets/d/1YLuC_qHEV4V7aQ3472De1zHS5SS_n_LB/edit?usp=drive_link&ouid=109768404338383806081&rtpof=true&sd=true",
					csv: "https://drive.google.com/file/d/1KgP65vd8vLQg7wxb2oLauA8QeBKfWxvS/view?usp=drive_link",
				},
			},
			"2021-22": {
				Annual: {
					pdf: "https://drive.google.com/file/d/1RLPIQPTfNxkmEdpLOZayS79eoRY3riQ3/view?usp=drive_link",
					excel:
						"https://docs.google.com/spreadsheets/d/1deuNen5xCAeWjhv3yj54wogfJEjvJqyh/edit?usp=drive_link&ouid=109768404338383806081&rtpof=true&sd=true",
					csv: "https://drive.google.com/file/d/1KVr0MTZw6QqGelPHd9Uuhqz8VAD1-kq3/view?usp=drive_link",
				},
			},

			"2020-21": {
				Annual: {
					pdf: "https://drive.google.com/file/d/1I54dDwVq23ZH_woUEELddF0jDJIPyzQK/view?usp=drive_link",
					excel:
						"https://docs.google.com/spreadsheets/d/1KEijkU6fUPJnqTj20KmjMNAdg7jx8LAL/edit?usp=drive_link&ouid=109768404338383806081&rtpof=true&sd=true",
					csv: "https://drive.google.com/file/d/1x9M_jqEYgxspP1mZl2MS0YRcFnq8EwGv/view?usp=drive_link",
				},
			},
		},
	},
	{
		name: "BALANCE_SHEET",
		data: {
			"2023-24": {
				Annual: {
					pdf: "https://drive.google.com/file/d/1rzZ6tEft9XXSmHpxyzbk2TXcMlbjD7uQ/view?usp=drive_link",
					excel:
						"https://docs.google.com/spreadsheets/d/10-NKZDFp_vMOgR0KrvaAqKr8RBb7IDiE/edit?usp=drive_link&ouid=117368135132398447653&rtpof=true&sd=true",
					csv: "https://drive.google.com/file/d/1Lidz72-vxTyFbKbADHYrYVm0UiDFluo-/view?usp=drive_link",
				},
			},
			"2022-23": {
				Annual: {
					pdf: "https://drive.google.com/file/d/1t7oYo7Emb_bt1Fg3hzlnj8xYDey_VEsl/view?usp=drive_link",
					excel:
						"https://docs.google.com/spreadsheets/d/1rCuJm8uHIUGgwFMyQqJncG9KcfC_RsAr/edit?usp=drive_link&ouid=117368135132398447653&rtpof=true&sd=true",
					csv: "https://drive.google.com/file/d/1hOELrjn4dNBzcAG-FNgD4bLzfuyNMK9w/view?usp=drive_link",
				},
			},
			"2021-22": {
				Annual: {
					pdf: "https://drive.google.com/file/d/1kdsHJxCRQJlzojhV5XTpgWpai3Y1NjUQ/view?usp=drive_link",
					excel:
						"https://docs.google.com/spreadsheets/d/1M0Fi50KBxJv9WpOWmRwXrjzSdT8a3_IE/edit?usp=drive_link&ouid=117368135132398447653&rtpof=true&sd=true",
					csv: "https://drive.google.com/file/d/1xsMPDNU7TXbCZh6iHdEJMP03CLdviquC/view?usp=drive_link",
				},
			},
			"2020-21": {
				Annual: {
					pdf: "https://drive.google.com/file/d/1WIp20v2ZO99s6s0PNoRvX1fvfDCpLfKY/view?usp=drive_link",
					excel:
						"https://docs.google.com/spreadsheets/d/1k0VkG7bIrPtZJhSO-UKyJx7PP-AkziFk/edit?usp=drive_link",
					csv: "https://drive.google.com/file/d/1milVkeqO_qg-_7uaXcTc86eRhkXT-jJj/view?usp=drive_link",
				},
			},
		},
	},
];

// Function to find the report URL
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
		if (!data.Quaterly || !data.Quaterly[period]) {
			return null;
		}
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

// Endpoint to get all reports
app.get("/get-all-reports", (req, res) => {
	const allReports = requestURL.map((report) => {
		const reportData = {};
		Object.keys(report.data).forEach((year) => {
			reportData[year] = {};
			// Check if Quaterly exists
			if (report.data[year].Quaterly) {
				Object.keys(report.data[year].Quaterly).forEach((period) => {
					reportData[year][period] = {};
					Object.keys(report.data[year].Quaterly[period]).forEach((format) => {
						const url = findReportURL(report.name, year, period, format);
						if (url) {
							reportData[year][period][format] = url;
						}
					});
				});
			}
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

// Start the server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
