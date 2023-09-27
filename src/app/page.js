import DoubleHeader from '@/components/DoubleHeader';
import NewDomainForm from '@/components/NewDomainForm';

export default function Home() {
  return (
    <div>
      <NewDomainForm />
      <DoubleHeader preTitle={'Your domains'} mainTitle={'4 Domains'} />
    </div>
  );
}
