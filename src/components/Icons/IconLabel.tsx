import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const icons = [
  {
    icon: <></>,
    title: "Qiita",
    link: "https://qiita.com/syoimin",
  },
  {
    icon: <GitHubIcon />,
    title: "Github",
    link: "https://github.com/syoimin",
  },
];

const IconLabel = () => {
  return (
    <Stack direction="row" spacing={2}>
      {icons.map((data, index) => (
        <Link
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <Button variant="contained" size="large" startIcon={data.icon}>
            {data.title}
          </Button>
        </Link>
      ))}
    </Stack>
  );
};

export default IconLabel;
