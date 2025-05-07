import { RequestInfo } from "rwsdk/worker";
import { BarChartComponent } from "./BarChartComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";


export function Home({ ctx }: RequestInfo) {
  return (
    <div>
      <h1>Hello World</h1>
      <div className="flex flex-col gap-4">
        <div className="w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChartComponent />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
