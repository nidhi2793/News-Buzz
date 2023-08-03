import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import MovieIcon from "@mui/icons-material/Movie";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import SportsCricketOutlinedIcon from "@mui/icons-material/SportsCricketOutlined";
import DeviceHubOutlinedIcon from "@mui/icons-material/DeviceHubOutlined";

const categories = [
  {
    category: "General",
    icon: <NewspaperOutlinedIcon />,
  },
  {
    category: "Business",
    icon: <BusinessOutlinedIcon />,
  },
  {
    category: "Entertainment",
    icon: <MovieIcon />,
  },

  {
    category: "Health",
    icon: <HealthAndSafetyOutlinedIcon />,
  },
  {
    category: "Science",
    icon: <ScienceOutlinedIcon />,
  },
  {
    category: "Sports",
    icon: <SportsCricketOutlinedIcon />,
  },
  {
    category: "Technology",
    icon: <DeviceHubOutlinedIcon />,
  },
];

export default categories;
