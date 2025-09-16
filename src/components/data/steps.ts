import {
  ChessBishop,
  ChessKnight,
  ChessKing,
} from "@/components/ui/ChessIcons";

export interface StepContent {
  teamComposition?: string[];
  feeSupports?: {
    title: string;
    description: string;
  };
  liveArena?: {
    title: string;
    description: string;
  };
  participationFee?: string;
  buttonText?: string;
  statistic?: string;
  description?: string;
  callToAction?: string;
  benefits?: string[];
  buttons?: Array<{ text: string; variant: string }>;
  benefitsTitle?: string;
}

export interface Step {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  chessPiece: React.ComponentType<{ size?: number; color?: string }>;
  content: StepContent;
}

export const steps: Step[] = [
  {
    id: 1,
    title: "Step Into the Arena — Play with Your Own Corporate Team",
    image: "/images/participation-one.png",
    imageAlt: "Corporate Team Participation",
    chessPiece: ChessBishop,
    content: {
      teamComposition: [
        "● Each company fields a 4-player team",
        "● 3 staff members (from any department or level of choice)",
        "● 1 exceptional young chess player (under 15) from Chess in Slums Africa (CISA)"
      ],
      feeSupports: {
        title: "What Your Fee Supports:",
        description: "A portion of your brand's participation fee directly funds a 1-year scholarship for the young prodigy on your team."
      },
      liveArena: {
        title: "Live Arena Format:",
        description: "Teams will battle it out face-to-face in a grand event for chess, strategy, and corporate pride."
      },
      participationFee: "₦5,000,000 per team",
      buttonText: "REGISTER YOUR TEAM"
    }
  },
  {
    id: 2,
    title: "Build Beyond the Board — The Library Project",
    image: "/images/participation-two.png",
    imageAlt: "Library Project",
    chessPiece: ChessKnight,
    content: {
      statistic: "75% of Nigerian children (ages 7–14) cannot read a simple sentence or solve basic math. — UNICEF, 2023",
      description: "This tournament powers a mission far beyond the checkered squares. Beyond competing as a team, your company can also sponsor the Library Project via partnership and sponsoring the tournament, helping to build safe learning spaces in underserved communities.",
      callToAction: "Every child deserves a chance to read. Your brand helps make that happen.",
      benefits: [
        "● Children gets access to books & digital learning",
        "● Safe spaces for curiosity and intellectual growth",
        "● A foundation for Nigeria's next generation of thinkers"
      ],
      buttons: [
        { text: "REGISTER YOUR TEAM", variant: "secondary" },
        { text: "WHAT YOUR BRAND GETS", variant: "outline" }
      ]
    }
  },
  {
    id: 3,
    title: "Be a Partner— Without Playing",
    image: "/images/participation-three.png",
    imageAlt: "Partnership",
    chessPiece: ChessKing,
    content: {
      description: "Become a partner of the tournament and library initiative without fielding a team. As a non-playing sponsor,",
      benefitsTitle: "WHAT YOUR COMPANY BRAND GETS;",
      benefits: [
        "● Strategic partnership recognition across all official tournament and library project communications.",
        "● Co-branded legacy: Help fund the education of underserved children through libraries and scholarships",
        "● CSR & ESG Alignment: Strengthen your company's social impact narrative with verifiable outcomes"
      ],
      buttonText: "REGISTER YOUR TEAM"
    }
  }
];
