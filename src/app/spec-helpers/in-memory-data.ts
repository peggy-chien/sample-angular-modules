export const locationDropdown = {
  locations: [
    {
      nodeCode: 'United States',
      level: 'Country',
      canContainAssets: false,
      children: [
        {
          locationId: 46,
          locationName: 'DS2',
          nodeCode: 'DS2',
          code: 'DS2',
          level: 'Data Center',
          canContainAssets: true,
        },
        {
          locationId: 1,
          locationName: 'Demo Site A',
          nodeCode: 'SITE A',
          code: 'SITE A',
          level: 'Data Center',
          canContainAssets: true,
        },
        {
          locationId: 2,
          locationName: 'Demo Site B',
          nodeCode: 'SITE B',
          code: 'SITE B',
          level: 'Data Center',
          canContainAssets: true,
        },
        {
          locationId: 8,
          locationName: 'Demo Site Colocation',
          nodeCode: 'SITE COLO',
          code: 'SITE COLO',
          level: 'Data Center',
          canContainAssets: true,
        },
        {
          locationId: 6,
          locationName: 'Demo IDF Site',
          nodeCode: 'SITE IDF',
          code: 'SITE IDF',
          level: 'Data Center',
          canContainAssets: true,
        },
      ],
    },
    {
      nodeCode: 'United Kingdom',
      level: 'Country',
      canContainAssets: false,
      children: [
        {
          locationId: 7,
          locationName: 'Demo Site London',
          nodeCode: 'SITE C',
          code: 'SITE C',
          level: 'Data Center',
          canContainAssets: true,
        },
      ],
    },
  ],
};
