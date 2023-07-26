import Image from 'next/image';

import SagarFullPose from '/public/images/sagar-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={SagarFullPose}
              alt="Fullpose of Sagar"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a passionate,{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.FIGMA}
            >
               Linux System Administrator
            </Link>{' '}
           

            I'm a passionate Linux Administrator / DevOps professional with 
            expertise in managing infrastructure, configuring servers, automating deployments, 
            and ensuring smooth operations. I am enthusiastic about bringing efficiency to system 
            administration and streamlining development workflows. User experience, automation, and 
            maintaining highly reliable and scalable systems matter to me.
          </Typography>
          <Typography>
          As an IT Refresh Tech, I began my journey in the IT field about 1 year ago. Over this time, I have 
          gained expertise in Linux, AWS, Docker, Ansible, Kubernetes, Terraform, Jenkins, Python scripting, 
          and other cloud-related technologies. I have successfully completed several cloud projects, focusing on CI/CD and container deployment.
         Now, I am actively seeking opportunities to grow within a company and evolve as a Linux Admin or Cloud Admin. 
         My passion for cloud administration drives me to continually learn and excel, making me a valuable asset to any organization. 
         Let's join forces and create a successful future in the world of cloud computing!
          </Typography>
          <Typography>
            I am very much a progressive thinker, integrating development and operations seamlessly. 
            Focused on robust, automated, and scalable solutions.
          </Typography>
          <Typography>
          When I'm not in full-on DevOps Engineer / Linux Admin mode, you can find me playing soccer or 
          immersing myself in creating exciting cloud projects. I enjoy witnessing the journey of early 
          startups and making the most of my free time. {' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.TWITTER}
            >
              Twitter
            </Link>{' '}
            where I share tech-related bites and build in public, or you can
            follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
         
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
