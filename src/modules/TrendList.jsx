import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import { fetchTrends } from '../services/trendService';

const TrendList = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchTrends().then(setTrends);
  }, []);

  return (
    <section>
      {trends.map(trend => (
        <Card key={trend.id} title={trend.title}>
          <p>{trend.description}</p>
        </Card>
      ))}
    </section>
  );
};

export default TrendList;
