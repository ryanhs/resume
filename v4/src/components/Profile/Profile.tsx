import { EB_Garamond } from "next/font/google";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { LiaBookSolid, LiaBuildingSolid } from "react-icons/lia";


dayjs.extend(relativeTime);

function Propic() {
  const data = {
    name: "Ryan Hamonangan",
    role: "Senior Software Architect"
  };
  return (
    <div className="mt-4">
      <div className="grid grid-cols-6">
        <div className="col-span-2 sm:col-span-1 mx-auto">
          <img
            src={"/resume/v4/out/propic-ryan.png"}
            alt="propic"
            className="propic-img"
          />
        </div>

        <div className="col-span-4 sm:col-span-5 ml-2">
          <h2 className="text-2xl font-bold">{data.name}</h2>
          <p className="text-xs leading-6">{data.role}</p>
        </div>
      </div>
    </div>
  );
}

function Headline() {
  const data = {
    headlines: [
      `Fullstack Software Developer`,
      `Node.js & React Enthusiast`,
      `AWS Specialist`,
      `DevOps & Application Security Expert`,
      `Passionate about Learning and Challenging Projects`,
      `Let's Connect for Outstanding Software Solutions!`
    ],
  };

  return (
    <div className="mt-4">
      {/* <p className="font-bold text-lg">About</p> */}
      <p className="text-xs leading-6">
        {data.headlines.join(" | ")}
      </p>
    </div>
  );
}

function Experiences() {
  const data = [
    {
      title: `Senior Software Architect`,
      company: `PT ASTRA INTERNATIONAL TBK`,
      from: "Aug 2018",
      to: "Present",
      duration: dayjs("2018-08").toNow(true),
    },
    {
      title: `AI Researcher (University Lab)`,
      company: `Institut Teknologi Bandung`,
      from: "Feb 2018",
      to: "Jul 2018",
      duration: "6 mos",
    },
    {
      title: `Lecturer`,
      company: `Universitas Internasional Batam`,
      from: "Aug 2016",
      to: "May 2017",
      duration: "10 mos",
    },
    {
      title: `PHP Programmer`,
      company: `Vox Teneo`,
      from: "Sep 2014",
      to: "Jul 2015",
      duration: "9 mos",
    },
    {
      title: `PHP Developer`,
      company: `PT. Topiputih Kreasi Indonesia`,
      from: "Oct 2012",
      to: "Jan 2014",
      duration: "1 yr 3 mos",
    },
    {
      title: `Full Stack Developer`,
      company: `CV Pusat Link & CV Techno`,
      from: "Jan 2012",
      to: "Aug 2012",
      duration: "8 mos",
    },
    {
      title: `PHP Programmer`,
      company: `paseban.com`,
      from: "Apr 2011",
      to: "Dec 2011",
      duration: "6 mos",
    },
  ];

  return (
    <div className="mt-4 gap">
      <p className="mb-2 font-bold text-lg">
        <LiaBuildingSolid />
        &nbsp;Experiences {/* ({dayjs('2011-04').toNow(true)}) */}
      </p>
      {data.map((item) => (
        <div key={item.title + item.company}>
          <p className="text-sm">
            {item.title}, {item.company}
          </p>
          <p className="mb-2 text-xs text-gray-600">
            {item.from} - {item.to} {/* · {item.duration} */}
          </p>
        </div>
      ))}
    </div>
  );
}

function Educations() {
  const data = [
    {
      university: `Institut Teknologi Bandung`,
      major: `Master Degree, Engineering`,
      from: "2016",
      to: "2018",
    },
    {
      university: `STMIK "amikbandung"`,
      major: `Bachelor Degree, Computer Science`,
      from: "2011",
      to: "2014",
    },
  ];

  return (
    <div className="mt-4 gap">
      <p className="font-bold text-lg">
        <LiaBookSolid />
        &nbsp;Educations
      </p>
      <div className="mt-2 grid grid-cols-2">
        {data.map((item) => (
          <div key={item.university} className="col-span-1 gap-4">
            <p className="text-sm font-bold">{item.university}</p>
            <p className="text-sm">{item.major}</p>
            <p className="mb-2 text-xs text-gray-600">
              {item.from} - {item.to}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Certifications() {
  const data = [
    {
      title: `Leader as Coach`,
      institute: `Loop Institute of Coaching`,
      issued: "Apr 2019",
    },
  ];

  return (
    <div className="mt-4 gap">
      <p className="font-bold text-lg">
        <LiaBookSolid />
        Certifications
      </p>
      <div className="mt-2 grid grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item.title} className="col-span-1">
            <p className="text-sm">{item.title}</p>
            <p className="mb-2 text-xs text-gray-600">
              {item.institute} · {item.issued}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Publications() {
  const data = [
    {
      title: `Domain Event Driven pada Aplikasi Komputer Catur: Logika Catur`,
      issued: "Feb 1, 2017",
      media: `Journal: KOPERTIP: Jurnal Ilmiah Manajemen Informatika dan Komputer
Volume: 1 No 1 (2017)
Pages: 35-38`,
    },
    {
      title: `Optimization and modification of evaluation function in Stockfish chess engine`,
      issued: "IEEE · Dec 19, 2016",
      media: `Dec. 19, 2016 to Dec. 21, 2016
ISBN: 978-1-5090-5300-1
pp: 217-221`,
    },
    {
      title: `Komparasi Algoritma Pengurutan untuk Penerimaan Peserta Didik Baru Kota Bandung`,
      issued: "Universitas Jenderal Achmad Yani · Jan 1, 2015",
      media: `Majalah Ilmiah MIPA - ARISTOTELES Vol.13 Issue.1`,
    },
  ];

  return (
    <div className="mt-4 gap">
      <p className="font-bold text-lg">
        <LiaBookSolid />
        Publications
      </p>
      <div className="mt-2 grid grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item.title} className="mt-2 col-span-1">
            <p className="text-sm">{item.title}</p>
            <p className="text-xs text-gray-600">{item.issued}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <>
      <div className={`w-full leading-6 py-4 px-6 font-sans`}>
        <Propic />
        <Headline />
        <Experiences />
        <Educations />
        <Certifications />
        <Publications />
      </div>
    </>
  );
}
