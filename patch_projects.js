const fs = require('fs');
const file = 'publicsite/src/app/projects/page.tsx';
let data = fs.readFileSync(file, 'utf8');

const newProject = `
  {
    id: "gotu-farm",
    title: "Gotu Gamachu Farm",
    metadataTag: "Flagship Site",
    description: "Explore the physical heart of Northern Vision's climate-smart interventions: integrated dryland agriculture, aquaculture scaling, and localized community training models.",
    href: "/projects/gotu-farm",
    colSpan: "md:col-span-1",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1592982537447-6f23f11d1377?q=80&w=2069&auto=format&fit=crop"
  },`;

data = data.replace(
  'const PROJECT_TRACKS: ProjectTrack[] = [',
  'const PROJECT_TRACKS: ProjectTrack[] = [' + newProject
);

data = data.replace(
  'colSpan: "md:col-span-2",',
  'colSpan: "md:col-span-1",'
);

fs.writeFileSync(file, data);
