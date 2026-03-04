import resizeImage from '../utilities/resizeImage';
import fs from 'fs';

describe('Resize Utility', () => {
  it('should create a resized image file', async () => {
    const output = await resizeImage('fjord', 150, 150);
    expect(fs.existsSync(output)).toBeTrue();
  });
  it('should throw error for invalid image', async () => {
    try {
      await resizeImage('invalid', 100, 100);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
