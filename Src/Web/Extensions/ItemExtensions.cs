using Sitecore.Data;
using Sitecore.Data.Items;

namespace Web.Extensions
{
    public static class ItemExtensions
    {
        public static Item GetFirstDescendantInheritingFrom(this Item item, ID templateId)
        {
            string query = string.Format(".//*[@@templateid='{0}']", templateId);
            return item.Axes.SelectSingleItem(query);
        }
    }
}