import Image from 'next/image';

import SagarFullPose from '/public/images/space.jpg';
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
          A year ago, I launched my IT journey as an IT Refresh Tech at Kaiser Permanente.
           Our Fresno-based Refresh Program consistently outperformed nationwide. 
           My role included upgrading hardware/software and swiftly troubleshooting.
          </Typography>
          <Typography>
          I have honed expertise in advanced areas like Linux, AWS, Docker, Ansible, 
          Kubernetes, Terraform, Jenkins, and Python through immersive projects, 
          certifications, and academics. Notably, I have succeeded in enhancing cloud projects, 
          CI/CD, and Linux server management. Seeking to advance as a Cloud/DevOps Engineer, 
          my passion positions me as an invaluable asset for growth.
          </Typography>
          <Typography>
            Outside of my Cloud pursuits, you can catch me at the gym or indulging in casual YouTube browsing. 
            Equally, I am captivated by the advancement of AI and its potential to shape our systems and society,  
            and maximize my free time accordingly. For more insights,
            you can follow 
            me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.TWITTER}
            >
              Twitter
            </Link>{' '}
            where I share tech-related bites, or you can
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
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.E. in Cloud Computing 
              </Typography>
              <Typography component="li">Full time IT Tech</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Aspiring Aws Community Cloud Builder</Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
