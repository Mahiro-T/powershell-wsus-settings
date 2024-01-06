export default function Home() {
  const jsonData = Deno.readTextFileSync("json/wsus-products.json"); // JSONファイルのパスを指定する
  const json = JSON.parse(jsonData);
  return (
    <div>
      <h1>WSUSで配信可能な製品一覧</h1>
      <div>
        使用したWindowsのエディションとか<br />
        Edition Windows Server 2022 Datacenter Azure Edition<br />
        Version 21H2<br />
        Installed on 12/24/2023<br />
        OS build 20348.2159<br />
      </div>
      <table>
        <thead>
          <tr>
            <td>製品名</td>
            <td>製品ID</td>
            <td>説明</td>
          </tr>
        </thead>
        <tbody>
          {json.map((item: any, index: number) => (
            <tr key={index}>
              <td>{item.Product.Title}</td>
              <td>{item.Product.Id}</td>
              <td>{item.Product.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
