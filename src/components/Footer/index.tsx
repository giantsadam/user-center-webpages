import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = 'Giantsadam 出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'User Center',
          title: '用户中心',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'Test',
          title: '测试用例',
          href: 'https://baidu.com',
          blankTarget: true,
        },        {
          key: 'github',
          title: <><GithubOutlined />  Giantsadam GitHub</>,
          href: 'https://github.com/giantsadam',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
