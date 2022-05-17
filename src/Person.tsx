export default function Person(params: {
  name: string;
  age?: number;
}) {
  return <p>
    Hello {params.name} <br/>
    {params.age ? `age ${params.age}` : ''}
  </p>
}
