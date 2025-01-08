import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const syncUser = mutation({
  args: {
    userId: v.string(),
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("userId"), args.userId))
        .first();
      
      if (!existingUser) {
          await ctx.db.insert("users", {
              userId: args.userId,
              name: args.name,
              email: args.email,
              isPro: false
          })
      }
    },
  
});
