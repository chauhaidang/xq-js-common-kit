const fs = require('fs');
const path = require('path');

jest.mock('fs');
jest.mock('path');

describe('Config Module', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should load and parse configuration file successfully', () => {
        const mockConfig = { key: 'value' };
        fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));
        path.resolve.mockReturnValue('/mocked/path/xq.json');
        process.cwd = jest.fn().mockReturnValue('/mocked/path');

        const { getConfig } = require('../config');
        const config = getConfig();

        expect(fs.readFileSync).toHaveBeenCalledWith('/mocked/path/xq.json');
        expect(config).toEqual(mockConfig);
    });
});
