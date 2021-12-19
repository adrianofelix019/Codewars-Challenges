public class BitCounting {

    public static int countBits(int n) {
        String binaryString = Integer.toBinaryString(n);
        int onesAmount = binaryString.replace("0", "")
            .length();
        
        return onesAmount;
    }
    
}
