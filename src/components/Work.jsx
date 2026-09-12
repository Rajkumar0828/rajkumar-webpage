/**
 * 
 * @copyright 2024 RAJKUMAR RAMANATHAN
 * @license Apache-2.0
 */


import ProjectCard from './ProjectCard';
const works = [
    {
      imgSrc: 'images/Heart disease data.jpeg',
      title: 'Visualizing and Predicting Heart Disease using Interactive Dashboard ',
      summary: 'Built an interactive healthcare analytics dashboard that visualizes risk patterns and makes predictive insights easier to understand.',
      impact: 'Turned healthcare data into a more actionable decision-support tool for identifying risk indicators.',
      tags: ['IBM WATSON', 'COGNOS', 'KNN'],
      featured: true,
    },
    {
      imgSrc: 'images/BMTNN.jpeg',
      title: 'Sentiment Analysis Using Blended Multilingustic System',
      summary: 'Developed a multilingual sentiment evaluation system that interprets user opinions and emotional cues from text data.',
      impact: 'Improved understanding of feedback patterns across multilingual content.',
      tags: ['WSD', 'TNN'],
      featured: false,
    },
    {
      imgSrc: 'images/Online survey.jpeg',
      title: 'Online Survey System',
      summary: 'Created a survey platform to streamline data collection, response tracking, and reporting in one place.',
      impact: 'Reduced manual reporting effort while improving response management and visibility.',
      tags: ['Development', 'API','Docker','Jenkins'],
      featured: false,
    },
    {
      imgSrc: 'images/LXP.jpeg',
      title: 'Learning Experience Platform',
      summary: 'Built a personalized learning platform to support training modules, progress visibility, and user engagement.',
      impact: 'Improved the accessibility and structure of learning experiences for users.',
      tags: ['Web-api', 'Development','Dotnet'],
      featured: false,
    },
    {
      imgSrc: 'images/TDS.png',
      title: 'TDS (ID Card Tailgate Detection System)',
      summary: 'AI-powered CCTV solution designed to detect unauthorized tailgating and monitor secure access events in real time.',
      impact: 'Strengthened physical security by identifying access violations and suspicious entry patterns.',
      tags: ['Computer Vision', 'AI', 'CCTV', 'Security'],
      featured: false,
    },
    {
      imgSrc: 'images/AI-Proctor.png',
      title: 'AI Proctoring System',
      summary: 'Computer vision-based exam monitoring platform that tracks suspicious behaviors during online assessments.',
      impact: 'Improved remote assessment integrity with automated behavior monitoring and alerts.',
      tags: ['Computer Vision', 'Proctoring', 'AI', 'Exam Monitoring'],
      featured: false,
    },
    {
      imgSrc: 'images/ikyc.png',
      title: 'iKYC - Intelligent AI-Powered Identity Verification Platform',
      summary: 'Intelligent identity verification platform combining AI-driven identity checks and document validation for secure onboarding.',
      impact: 'Accelerated digital onboarding while improving verification accuracy and trust.',
      tags: ['AI', 'Identity Verification', 'KYC', 'Automation'],
      featured: false,
    },
  ];

const Work = () => {
  return (
   <section id="work" className="section">
    <div className="container">
      <div className="mb-8 reveal-up">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
          Projects
        </p>
        <h2 className="headline-2">
          Real-world solutions I have built
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 reveal-up">
        {works.map(({ imgSrc, title, summary, impact, tags, featured }) => (
          <ProjectCard
            key={title}
            imgSrc={imgSrc}
            title={title}
            summary={summary}
            impact={impact}
            tags={tags}
            featured={featured}
            classes={featured ? 'md:col-span-2 xl:col-span-2' : ''}
          />
        ))}
      </div>
    </div>
   </section>
  )
}

export default Work