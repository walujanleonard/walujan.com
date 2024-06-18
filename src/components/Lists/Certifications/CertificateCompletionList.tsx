import { ExternalLinkIcon } from "@/components/Misc/Icons";
import { CertificateCompletionLists } from "@/data/certifications/CertificateCompletionLists";

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const sortCertificatesByDate = (certificates: any[]) => {
  return certificates.sort((a, b) => {
    const dateA = new Date(a.date_issued).getTime();
    const dateB = new Date(b.date_issued).getTime();
    return dateB - dateA;
  });
};

const Certificate: React.FC<{ certificate: any }> = ({ certificate }) => (
  <li>
    <h3>{certificate.certificate_name}</h3>
    <p>{`Issued by: ${certificate.issued_by}`}</p>
    <p>{`Date issued: ${formatDate(certificate.date_issued)}`}</p>
    {certificate.credential_id && (
      <p>{`Credential ID: ${certificate.credential_id}`}</p>
    )}
    {certificate.credential_url && (
      <div>
        <a href={certificate.credential_url} target="_blank">
          <p className="hover:underline font-semibold">
            Show credential
            <ExternalLinkIcon />
          </p>
        </a>
      </div>
    )}
    <a href={certificate.certificate_file} target="_blank">
      <p className="hover:underline font-semibold">
        View certificate file
        <ExternalLinkIcon />
      </p>
    </a>
  </li>
);

const CertificateCompletionList: React.FC = () => {
  const CertificateCompletionListsDesc =
    CertificateCompletionLists.length > 1 &&
    CertificateCompletionLists[0].year > CertificateCompletionLists[1].year
      ? CertificateCompletionLists
      : [...CertificateCompletionLists].reverse();

  return (
    <>
      {CertificateCompletionListsDesc.map((yearData, index) => (
        <div key={index}>
          <div className="mt-10">
            <h2>{yearData.year}</h2>
            <ul>
              {sortCertificatesByDate(yearData.certificates).map(
                (certificate, certIndex) => (
                  <Certificate key={certIndex} certificate={certificate} />
                )
              )}
            </ul>
          </div>
          <hr className="mt-10" />
        </div>
      ))}
    </>
  );
};

export default CertificateCompletionList;
