import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: ['latin'], weight: "400", style: 'normal' });

type IPercent = 100 | 90 | 80 | 70 | 60;

type IProgressLineProps = {
  percent: IPercent;
};

function ProgressLine({ percent }: IProgressLineProps) {
  const widthClass = {
    100: "w-full",
    90: "w-11/12",
    80: "w-4/5",
    70: "w-9/12",
    60: "w-3/5",
  }[percent];

  return <div className={`${widthClass} bg-white leading-6 h-2`} title={String(percent)}>&nbsp;</div>;
}

function Details() {
  const data = [
    { label: "Jakarta" },
    { label: "Indonesia" },
    { label: "+62-85-720-759-240" },
    { label: "mr.ryansilalahi@gmail.com" },
  ];

  return (
    <div>
      <p className="font-bold text-lg">Details</p>
      <ul>
        {data.map((item) => (
          <li key={item.label} className="mb-0">{item.label}</li>
        ))}
      </ul>
    </div>
  );
}

function Links() {
  const data = [
    { href: "https://id.linkedin.com/in/ryanhs" },
  ];

  return (
    <div className="mt-10">
      <p className="font-bold text-lg">Links</p>
      <ul>
        {data.map((item) => (
          <li key={item.href} className="mb-2 break-words">
            <a href={item.href} target="_blank">
              {item.href}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  const data = [
    { label: "JavaScript/TypeScript", level: 100 },
    { label: "Node.JS/Nest.JS", level: 100 },
    { label: "React.JS/Next.JS", level: 100 },
    { label: "Microservices", level: 100 },
    { label: "DevSecOps", level: 100 },
    { label: "Cloud (AWS, Azure)", level: 100 },
    { label: "Software Architecture", level: 100 },
  ];

  return (
    <div className="mt-10">
      <p className="font-bold text-lg">Skills</p>
      <ul>
        {data.map((item) => (
          <li key={item.label} className="mb-2">
            {item.label}
            <ProgressLine percent={item.level as IPercent} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Languages() {
  const data = [
    { label: 'English (C1)', level: 90 },
    { label: 'Bahasa Indonesia (Native Speaker)', level: 100 }
  ];

  return (
    <div className="mt-10">
      <p className="font-bold text-lg">Languages</p>
      <ul>
        {data.map((item) => (
          <li key={item.label} className="mb-2">
            {item.label}
            <ProgressLine percent={item.level as IPercent} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Sidebar() {
  return (
    <>
      <div className={`bg-sidebar w-full p-4 leading-6 ${garamond.className}`}>
        <div className="grid grid-cols-2 md:grid-cols-1 w-full">
          <div className="col-span-1 mx-2 md:mx-0 mt-10 md:mt-20">
            <Details />
          </div>
          <div className="col-span-1 mx-2 md:mx-0">
            <Links />
          </div>
          <div className="col-span-1 mx-2 md:mx-0">
            <Skills />
          </div>
          <div className="col-span-1 mx-2 md:mx-0">
            <Languages />
          </div>
        </div>
      </div>
    </>
  );
}
