import { LiaCloudDownloadAltSolid } from "react-icons/lia";

export default function DownloadButton() {
  return (
    <a
      href="/resume/v4/out/resume-ryan-hamonangan.pdf"
      target="_blank"
      className="download-button no-print"
    >
      <LiaCloudDownloadAltSolid />
      &nbsp; download PDF
    </a>
  );
}
