import dayjs from "dayjs";
import { LiaBuildingSolid } from "react-icons/lia";

type IResponsibility = {
  title: string;
  items: string[];
}

type IJobDesc = {
  role: string;
  company: string;

  from: string;
  to: string;
  duration: string;

  description: string;
  responsibilities: IResponsibility[];

  qualifications: string[];
  keyAchievements: string[];
};

type IPropsJobdesc = { jobDesc: IJobDesc }

const Timeline = ({ jobDesc }: IPropsJobdesc) => (
  <p className="mb-2 text-xs text-gray-600">
    {jobDesc.from} - {jobDesc.to} {/* · {item.duration} */}
  </p>
);

const Description = ({ jobDesc }: IPropsJobdesc) => (
  <>
    <p className="text-sm font-bold mb-1">Description:</p>
    <p className="text-sm font-sans">{jobDesc.description}</p>
  </>
);

const Responsibilities = ({ jobDesc }: IPropsJobdesc) => (
  <>
    <p className="text-sm font-bold mb-1">Responsibilities:</p>
    <ul className="list-[square] list-inside">
      {jobDesc.responsibilities.map((v, k) => (
        <li key={k} className="text-sm">
          <span className="font-bold">{v.title}</span>
          <ul className="list-disc list-inside my-1 ml-5">
            {v.items.map((v1, k1) => (
              <li key={k1} className="text-sm">
                {v1}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </>
);

const Qualifications = ({ jobDesc }: IPropsJobdesc) => (
  <>
    <p className="text-sm font-bold mb-1">Qualifications:</p>
    <ul className="list-disc list-inside">
      {jobDesc.qualifications.map((v, k) => (
        <li key={k} className="text-sm">
          {v}
        </li>
      ))}
    </ul>
  </>
);

const KeyAchievements = ({ jobDesc }: IPropsJobdesc) => (
  <>
    <p className="text-sm font-bold mb-1">Key Achievements:</p>
    <ul className="list-disc list-inside">
      {jobDesc.keyAchievements.map((v, k) => (
        <li key={k} className="text-sm">
          {v}
        </li>
      ))}
    </ul>
  </>
);

const Space = () => <div className="my-2" />;

function LatestJobDescInner({ jobDesc }: IPropsJobdesc) {
  return (
    <div className="mt-3 gap">
      <p className="mb-2 font-bold text-base">
        <LiaBuildingSolid />
        &nbsp; {jobDesc.role} at {jobDesc.company}
      </p>
      <div>
        <Timeline jobDesc={jobDesc} />

        <Space />
        <Description jobDesc={jobDesc} />

        <Space />
        <Responsibilities jobDesc={jobDesc} />

        <Space />
        <Qualifications jobDesc={jobDesc} />

        <Space />
        <KeyAchievements jobDesc={jobDesc} />
      </div>
    </div>
  );
}


export function LatestJobDesc() {
  const data: IJobDesc[] = [
    {
      role: `Technology Principal/Architect`,
      company: `PT Astra International Tbk`,

      from: "Aug 2018",
      to: "Present",
      duration: dayjs("2018-08").toNow(true),

      description: `During my tenure at Astra International, I held the role of Technology Principal/Architect, overseeing critical systems including the OLX platform, Toyota Sales Operation, Honda Sales Operation, and AstraDigital (Mobil) Products. My multifaceted role covered strategic leadership, infrastructure development, code implementation, operations setup, and cutting-edge research in AI integration.`,

      responsibilities: [
        {
          title: `Strategic Leadership and Architecture`,
          items: [
            `Led as the Technology Principal/Architect, providing strategic direction for the technological landscape of OLX, Toyota Sales Operation, Honda Sales Operation, and AstraDigital (Mobil) Products.`,
            `Formulated and executed comprehensive technology roadmaps, ensuring alignment with business objectives.`,
          ],
        },
        {
          title: `Infrastructure as Code Implementation`,
          items: [
            // `Orchestrated the end-to-end setup of systems, transforming infrastructure and networking into scalable and automated Infrastructure as Code (IaC) models.`,
            `Spearheaded research and implementation of IaC methodologies, with a focus on AWS and Azure cloud services, setting the standard for efficient and scalable deployment practices.`,
            `Opened pathways for DevOps teams, facilitating streamlined development processes.`,
          ],
        },
        {
          title: `Code Development and Collaboration`,
          items: [
            `Wrote foundational code during the initiation of service development, setting high standards and providing a roadmap for subsequent developers.`,
            `Proficient in coding languages such as Javascript/Typescript, ensuring the development of high-quality and scalable code across the entire technology stack, from Backend to Frontend.`,
            // `Established collaborative coding practices to expedite development processes and ensure code quality.`,
          ],
        },
        // {
        //   title: `BIT Operations and Security`,
        //   items: [
        //     `Designed and implemented robust Business IT (BIT) operations frameworks for seamless integration of technology into day-to-day business processes.`,
        //     `Implemented Single Sign-On (SSO) solutions for all internal applications, utilizing platforms such as JumpCloud and Okta to enhance security and user authentication processes.`,
        //   ],
        // },
        {
          title: `AI Integration and Research`,
          items: [
            `Conducted pioneering research on ChatGPT, exploring its integration into systems for advanced AI-oriented functionalities.`,
            `Collaborated with cross-functional teams to implement innovative AI solutions that enhance user experiences and operational efficiency.`,
          ],
        },
      ],

      qualifications: [
        `Proven expertise as a Technology Principal/Architect with a track record of successful leadership in complex technological environments.`,
        `Extensive experience in infrastructure development, including the transformation of systems into Infrastructure as Code (IaC) models.`,
        `Proficient in coding languages such as Javascript/Typescript, ensuring the development of high-quality and scalable code.`,
        `Strong background in Business IT (BIT) operations, including the implementation of security measures such as Single Sign-On (SSO).`,
        `Demonstrated experience in researching and integrating AI technologies, with a specific focus on ChatGPT.`,
      ],

      keyAchievements: [
        `Successfully led the strategic transformation of OLX, Toyota Sales Operation, Honda Sales Operation, and AstraDigital (Mobil) Products.`,
        `Implemented Infrastructure as Code, leveraging AWS and Azure, enhancing scalability and efficiency.`,
        `Pioneered collaborative coding practices, expediting development processes and ensuring code quality.`,
        `Established robust BIT operations frameworks and implemented SSO solutions for enhanced security.`,
        `Contributed to cutting-edge AI research, exploring the integration of ChatGPT into systems for advanced functionalities.`,
        `Proficiently developed high-quality and scalable code, covering the entire technology stack from Backend to Frontend.`,
      ],
    },
  ];

  return (
    <>
      <div className={`w-full leading-6 py-4 px-6 font-sans `}>
        
        {data.map((item) => (
          <LatestJobDescInner key={item.role + item.company} jobDesc={item} />
        ))}

      </div>
    </>
  );
}
