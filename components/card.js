import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const RepoName = styled.h3`
  font-size: 18px;
  margin-top: 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
`;

const TechStack = styled.p`
  font-size: 14px;
  font-style: italic;
`;

const IssueCard = ({ issue }) => {
  return (
    <CardWrapper>
      <RepoName>{issue.repository_url.split('/').pop()}</RepoName>
      <Description>{issue.title}</Description>
      <TechStack>Tech Stack: {issue.labels.map(label => label.name).join(', ')}</TechStack>
    </CardWrapper>
  );
};

export default IssueCard;
