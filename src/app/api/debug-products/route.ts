import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
    const supabase = createClient();

    // Test 1: simple count with no filter
    const { data: allProducts, error: err1 } = await supabase
        .from('products')
        .select('id, name, is_active, sort_order')
        .limit(20);

    // Test 2: with is_active filter
    const { data: activeProducts, error: err2 } = await supabase
        .from('products')
        .select('id, name, is_active')
        .eq('is_active', true)
        .limit(20);

    return NextResponse.json({
        allProducts,
        err1: err1?.message,
        activeProducts,
        err2: err2?.message,
        env: {
            url: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'set' : 'MISSING',
            anon: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'set' : 'MISSING',
        }
    });
}
