import { WebsiteStorage } from "@/lib/MainConstants";

const certificateStorage = WebsiteStorage.certificates;

export const CertificationCertificateLists = [
  {
    year: 2024,
    certificates: [
      {
        certificate_name: "LSP TD - Junior Network Administrator",
        issued_by: "BNSP",
        date_issued: "2024-03-26",
        date_updated: null,
        date_expired: "2027-03-26",
        credential_id: "61200 3513 3 0084945 2024 / TIK.1565.07438.2024",
        credential_url: null,
        status: {
          active: true,
        },
        certificate_file: `${certificateStorage}/certifications/bnsp/bnsp-lsp-td-junior-web-administrator-march-2024.pdf`,
      },
      {
        certificate_name: "Back End Development and APIs",
        issued_by: "freeCodeCamp",
        date_issued: "2024-01-18",
        date_updated: null,
        date_expired: null,
        credential_id: null,
        credential_url:
          "https://www.freecodecamp.org/certification/walujan/back-end-development-and-apis",
        status: {
          active: true,
        },
        certificate_file: `${certificateStorage}/certifications/freecodecamp/freecodecamp-back-end-development-and-apis-january-2024.pdf`,
      },
    ],
  },
  {
    year: 2023,
    certificates: [
      {
        certificate_name: "LSP BPPTIK - Junior Graphic Designer",
        issued_by: "BNSP",
        date_issued: "2023-11-06",
        date_updated: null,
        date_expired: "2026-11-06",
        credential_id: "74100 2166 5 0006474 2023 / TIK.1389.3494.2023",
        credential_url: null,
        status: {
          active: true,
        },
        certificate_file: `${certificateStorage}/certifications/bnsp/bnsp-lsp-bpptik-junior-graphic-designer-november-2023.pdf`,
      },
    ],
  },
  {
    year: 2022,
    certificates: [
      {
        certificate_name: "LSP TD - Junior Web Developer",
        issued_by: "BNSP",
        date_issued: "2022-09-06",
        date_updated: null,
        date_expired: "2025-09-06",
        credential_id: "62090 2513 3 0034912 2022 / TIK 1565 21584 2022",
        credential_url: null,
        status: {
          active: true,
        },
        certificate_file: `${certificateStorage}/certifications/bnsp/bnsp-lsp-td-junior-web-developer-september-2022.pdf`,
      },
    ],
  },
];
