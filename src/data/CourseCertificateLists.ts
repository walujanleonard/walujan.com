import { WebsiteStorage } from "@/lib/MainConstants";

const certificateStorage = WebsiteStorage.certificates;

export const CourseCertificateLists = [
  {
    year: 2024,
    certificates: [
      {
        certificate_name: "Introduction to IoT",
        issued_by: "Cisco",
        date_issued: "2024-03-27",
        credential_id: "0cce4851-5e68-4a15-b24d-7b24085ea6be",
        credential_url:
          "https://www.credly.com/badges/0cce4851-5e68-4a15-b24d-7b24085ea6be",
        certificate_file: `${certificateStorage}/courses/cisco/cisco-introduction-to-iot-badge-march-2024.pdf`,
      },
      {
        certificate_name: "Networking Devices and Initial Configuration",
        issued_by: "Cisco",
        date_issued: "2024-01-15",
        credential_id: "5d570b16-57ab-40d2-9659-8e7df550d52c",
        credential_url:
          "https://www.credly.com/badges/5d570b16-57ab-40d2-9659-8e7df550d52c",
        certificate_file: `${certificateStorage}/courses/cisco/cisco-networking-devices-and-initial-configuration-badge-january-2024.pdf`,
      },
      {
        certificate_name: "Networking Basics",
        issued_by: "Cisco",
        date_issued: "2024-01-14",
        credential_id: "35b194ca-5701-411c-9835-8039b73d91db",
        credential_url:
          "https://www.credly.com/badges/35b194ca-5701-411c-9835-8039b73d91db",
        certificate_file: `${certificateStorage}/courses/cisco/cisco-networking-basics-badge-january-2024.pdf`,
      },
    ],
  },
  {
    year: 2023,
    certificates: [
      {
        certificate_name: "Introduction to Cybersecurity",
        issued_by: "Cisco",
        date_issued: "2023-12-03",
        credential_id: "8cd684c7-490b-4c7f-8d13-d5745860cdb9",
        credential_url:
          "https://www.credly.com/badges/8cd684c7-490b-4c7f-8d13-d5745860cdb9",
        certificate_file: `${certificateStorage}/courses/cisco/cisco-introduction-to-cybersecurity-badge-december-2023.pdf`,
      },
      {
        certificate_name: "Essential Programming Course - 1st Semester",
        issued_by: "LearningX",
        date_issued: "2023-01-08",
        credential_id: null,
        credential_url: null,
        certificate_file: `${certificateStorage}/courses/learningx/learningx-essential-programming-course-1st-semester-january-2023.pdf`,
      },
    ],
  },
];
