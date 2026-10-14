import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  { name: 'Backend', items: ['Java', 'Spring Boot', 'Spring MVC', 'REST APIs', 'Python', 'FastAPI'] },
  { name: 'Architecture', items: ['Distributed systems', 'API orchestration', 'Async messaging', 'Service integration'] },
  { name: 'Security', items: ['Spring Security', 'Okta', 'Token auth', 'RBAC'] },
  { name: 'Data & messaging', items: ['MongoDB', 'PostgreSQL', 'Oracle SQL', 'IBM MQ', 'Kafka'] },
  { name: 'Cloud & UI', items: ['AWS', 'OpenShift', 'Kubernetes', 'React', 'JavaScript'] },
  { name: 'Quality & ops', items: ['JUnit', 'Mockito', 'Maven', 'Dynatrace', 'Splunk', 'Git'] },
];
