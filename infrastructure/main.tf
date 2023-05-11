resource "azurerm_resource_group" "emom_timer_rg" {
  name     = "rg-${var.project}-${var.environment}"
  location = var.location

  tags = {
    environment = var.environment
  }
}

resource "azurerm_storage_account" "emom_timer_sa" {
  name                     = "sa${var.project}${var.environment}"
  resource_group_name      = azurerm_resource_group.emom_timer_rg.name
  location                 = azurerm_resource_group.emom_timer_rg.location
  account_tier             = var.storage_account_tier
  account_replication_type = var.account_replication_type

  static_website {
    index_document     = var.index_file
    error_404_document = var.error_file
  }

  tags = {
    environment = var.environment
  }
}
