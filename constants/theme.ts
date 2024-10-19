import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export const useThemeColors = () => {
    const colorScheme = useColorScheme();
    
    return {
        background: Colors[colorScheme ?? 'light'].background,
        primaryColor: Colors[colorScheme ?? 'light'].primary,
        third: Colors[colorScheme ?? 'light'].btn,
        darkText: Colors[colorScheme ?? 'light'].darkText,
        secondaryText: Colors[colorScheme ?? 'light'].secondaryText,
    };
};
