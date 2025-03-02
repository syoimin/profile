import React from "react";
import { useLocation } from "react-router-dom";
import { 
  Accordion as MuiAccordion, 
  AccordionSummary, 
  AccordionDetails,
  Typography,
  Box,
  Chip,
  Link,
  Paper,
  useTheme,
  alpha,
  Stack,
  useMediaQuery
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkIcon from "@mui/icons-material/Work";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LinkIcon from "@mui/icons-material/Link";
import PeopleIcon from "@mui/icons-material/People";
import { resumeData, ResumeDataItem  } from "../data/resumeData";

interface AccordionItemProps {
  data: ResumeDataItem ;
  index: number;
  expanded: string | false;
  handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  locationHash: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ 
  data, 
  index, 
  expanded, 
  handleChange, 
  locationHash 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const isExpanded = locationHash === `#${data.title}` || expanded === `panel ${index}`;
  const isFeatured = data.feat;

  return (
    <Paper 
      elevation={1} 
      sx={{ 
        mb: 2,
        borderRadius: '10px',
        overflow: 'hidden',
        border: isFeatured ? `2px solid ${theme.palette.error.main}` : 'none',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }
      }}
    >
      <MuiAccordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={isExpanded}
        id={data.title}
        onChange={handleChange(`panel ${index}`)}
        disableGutters
        elevation={0}
        sx={{
          '&.Mui-expanded': {
            margin: 0,
          },
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ 
              color: isExpanded ? theme.palette.primary.main : theme.palette.text.secondary,
              transition: 'transform 0.3s ease-in-out',
              transform: isExpanded ? 'rotate(180deg)' : 'none'
            }} />
          }
          aria-controls={`panel${index}-content`}
          id={`panel${index}-header`}
          sx={{ 
            backgroundColor: isExpanded 
              ? alpha(theme.palette.primary.main, 0.05)
              : (isFeatured ? alpha(theme.palette.error.main, 0.05) : theme.palette.background.paper),
            padding: '12px 16px',
            transition: 'background-color 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.1)
            },
            '& .MuiAccordionSummary-content': {
              flexDirection: 'column',
              margin: 0
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <WorkIcon sx={{ color: theme.palette.text.secondary, mr: 1, fontSize: '1.2rem' }} />
              <Box>
                {data.jobs.map((job: string, idx: number) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    color="textSecondary"
                    component="span"
                    sx={{ mr: 1, fontWeight: 500 }}
                  >
                    {job}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DateRangeIcon sx={{ color: theme.palette.text.secondary, mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2" color="textSecondary">
                {data.date}
              </Typography>
            </Box>
          </Box>

          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              color: isExpanded ? theme.palette.primary.main : theme.palette.text.primary,
              mb: 1
            }}
          >
            {data.title}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
            {data.skills.map((skill: string, idx: number) => (
              <Chip 
                key={idx}
                label={skill}
                size="small"
                color={isExpanded ? "primary" : "default"}
                sx={{ 
                  fontWeight: 500,
                  borderRadius: '4px',
                  '& .MuiChip-label': {
                    padding: '0 8px',
                  }
                }}
              />
            ))}
          </Box>
        </AccordionSummary>

        <AccordionDetails sx={{ 
          padding: '16px 24px 24px',
          backgroundColor: alpha(theme.palette.background.paper, 0.6),
          borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`
        }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            gap: 3
          }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <AssignmentIcon sx={{ mr: 1, fontSize: '1rem' }} />
                  内容：
                </Typography>
                <Typography variant="body2" sx={{ whiteSpace: 'pre-line', pl: 3 }}>
                  {data.contents}
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  感想：
                </Typography>
                <Typography variant="body2" sx={{ whiteSpace: 'pre-line', pl: 3 }}>
                  {data.thoughts}
                </Typography>
              </Box>

              {data.link && (
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                  <LinkIcon sx={{ mr: 1, fontSize: '1rem', color: theme.palette.primary.main }} />
                  <Link
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: theme.palette.primary.main,
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {data.link}
                  </Link>
                </Box>
              )}
            </Box>

            <Box 
              sx={{ 
                minWidth: isMobile ? 'auto' : '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 2
              }}
            >
              <Box sx={{ width: '100%' }}>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <PeopleIcon sx={{ mr: 1, fontSize: '1rem' }} />
                  担当：
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 0.5 }}>
                  {data.assign.map((assign: string, idx: number) => (
                    <Chip
                      key={idx}
                      label={assign}
                      color="primary"
                      size="small"
                      variant="outlined"
                      sx={{ borderRadius: '4px' }}
                    />
                  ))}
                </Stack>
              </Box>

              <Box sx={{ width: '100%' }}>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                >
                  規模：
                </Typography>
                <Chip
                  label={data.scale}
                  color="success"
                  size="small"
                  sx={{ borderRadius: '4px' }}
                />
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </MuiAccordion>
    </Paper>
  );
};

const Accordion: React.FC = () => {
  const location = useLocation();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) =>
    (_: React.SyntheticEvent, isExpanded: boolean) => {
      window.location.hash = "";
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ p: 2 }}>
      {resumeData.map((data: ResumeDataItem, index) => (
        <AccordionItem
          key={index}
          data={data}
          index={index}
          expanded={expanded}
          handleChange={handleChange}
          locationHash={decodeURI(location.hash)}
        />
      ))}
    </Box>
  );
};

export default Accordion;