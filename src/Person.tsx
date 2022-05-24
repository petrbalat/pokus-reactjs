export default function Person(params: {
  name: string;
  street?: number;
}) {
  return <p>
    Hello {params.name} <br/>
    {params.street ? `Street ${params.street}` : ''}
  </p>
}
