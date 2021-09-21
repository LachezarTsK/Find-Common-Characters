
import java.util.List;
import java.util.ArrayList;

public class Solution {

    int[] commonCharacters;

    public List<String> commonChars(String[] words) {

        initializeCommonCharacters(words[0]);
        int n_array = words.length;

        for (int i = 1; i < n_array; i++) {

            int[] frequency = new int[26];
            String currentWord = words[i];
            int n_word = currentWord.length();

            for (int j = 0; j < n_word; j++) {
                frequency[currentWord.charAt(j) - 'a']++;
            }

            updateCommonCharacters(frequency);
        }
        return turnArrayIntoList();
    }

    public void initializeCommonCharacters(String firstWord) {
        commonCharacters = new int[26];
        for (int i = 0; i < firstWord.length(); i++) {
            commonCharacters[firstWord.charAt(i) - 'a']++;
        }
    }

    public void updateCommonCharacters(int[] frequency) {
        for (int i = 0; i < 26; i++) {
            commonCharacters[i] = Math.min(commonCharacters[i], frequency[i]);
        }
    }

    public List<String> turnArrayIntoList() {
        List<String> results = new ArrayList<>();
        for (int i = 0; i < 26; i++) {
            while (commonCharacters[i]-- > 0) {
                results.add(Character.toString((char) ('a' + i)));
            }
        }
        return results;
    }
}
