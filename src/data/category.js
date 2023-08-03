import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import MovieIcon from "@mui/icons-material/Movie";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import SportsCricketOutlinedIcon from "@mui/icons-material/SportsCricketOutlined";
import DeviceHubOutlinedIcon from "@mui/icons-material/DeviceHubOutlined";

const categories = [
  {
    category: "general",
    icon: <NewspaperOutlinedIcon />,
  },
  {
    category: "business",
    icon: <BusinessOutlinedIcon />,
  },
  {
    category: "entertainment",
    icon: <MovieIcon />,
  },

  {
    category: "health",
    icon: <HealthAndSafetyOutlinedIcon />,
  },
  {
    category: "science",
    icon: <ScienceOutlinedIcon />,
  },
  {
    category: "sports",
    icon: <SportsCricketOutlinedIcon />,
  },
  {
    category: "technology",
    icon: <DeviceHubOutlinedIcon />,
  },
];

export default categories;
